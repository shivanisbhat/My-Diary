// In src/app/shared/diary-data.component.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, BehaviorSubject } from "rxjs"; 
import { DiaryEntry } from "./dairy-entry.model";

@Injectable({providedIn:"root"})
export class DiaryDataService{

    
    public diarySubject = new BehaviorSubject<DiaryEntry[]>([]); 
    private diaryEntries: DiaryEntry[] = [];

    constructor(private http: HttpClient){}

    updateEntry(id: string, entry: DiaryEntry) {
      this.http.put<{message: string}>('http://localhost:3001/update-entry/' + id, entry).subscribe({
        next: (jsonData) => {
          console.log(jsonData.message);
          this.getDiaryEntries();
        },
        error: (err) => {
          console.error("Error updating entry:", err);
        }
      });
    }

    onDeleteEntry(id: string){
        this.http.delete<{message: string}>('http://localhost:3001/remove-entry/' + id).subscribe({
          next: (jsonData) => {
            console.log(jsonData.message);
            this.getDiaryEntries();
          },
          error: (err) => {
            console.error("Error deleting entry:", err);
          }
        });
    }

    getDiaryEntries(){
        this.http.get<{diaryEntry: any}>('http://localhost:3001/diary-entry')
        .pipe(map((responseData) => {
            return responseData.diaryEntry.map((entry: {date: string; entry: string; _id: string}) => {
                const rawDate = entry.date;
                let parsedDate: Date;

                if (rawDate) {
                    const tempDate = new Date(rawDate);
                    if (!isNaN(tempDate.getTime())) {
                        parsedDate = tempDate;
                    } else {
                        console.warn(`Could not parse date "${rawDate}". Falling back to current date.`);
                        parsedDate = new Date();
                    }
                } else {
                    console.warn(`Date field is empty or null. Falling back to current date.`);
                    parsedDate = new Date();
                }

                return {
                    date: parsedDate,
                    entry: entry.entry,
                    id: entry._id
                };
            });
        }))
        .subscribe({
            next: (updateResponse) => {
                this.diaryEntries = updateResponse;
                this.diarySubject.next(this.diaryEntries); 
                console.log("Diary entries fetched and updated:", this.diaryEntries);
            },
            error: (err) => {
                console.error("Error fetching diary entries:", err);
                this.diaryEntries = [];
                this.diarySubject.next(this.diaryEntries);
            }
        });
    }

    getDiaryEntry(id: string){
        return this.diaryEntries.find(el => el.id === id);
    }

    onAddDiaryEntry(diaryEntry: DiaryEntry){
        this.http.post<{message: string}>('http://localhost:3001/add-entry', diaryEntry).subscribe({
            next: (jsonData) => {
                console.log("Entry added:", diaryEntry);
                this.getDiaryEntries();
            },
            error: (err) => {
                console.error("Error adding entry:", err);
            }
        });
    }
}