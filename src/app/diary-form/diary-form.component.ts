import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { DiaryEntry } from '../shared/dairy-entry.model';
import { DiaryDataService } from '../shared/diary-data.component';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css'],
  standalone: true, 
  imports: [           
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class DiaryFormComponent implements OnInit {

  editMode = false;
  paramId: string = '';
  diaryEntry: DiaryEntry = { id: '', date: new Date(), entry: '' };
  diaryForm : FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    entry: new FormControl('', [Validators.required])
  });

  constructor(private diaryDataService: DiaryDataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.editMode = true;
        this.paramId = paramMap.get('id')!;
        const found = this.diaryDataService.getDiaryEntry(this.paramId);
        this.diaryEntry = found ? found : { id: '', date: new Date(), entry: '' };
      } else {
        this.editMode = false;
        this.diaryEntry = { id: '', date: new Date(), entry: '' };
      }
      this.diaryForm = new FormGroup({
        'date': new FormControl(this.editMode ? this.diaryEntry.date : '', [Validators.required]),
        'entry': new FormControl(this.editMode ? this.diaryEntry.entry : '', [Validators.required])
      });
    });
  }

  onSubmit(){
    const entry = new DiaryEntry('', this.diaryForm.value.date, this.diaryForm.value.entry);
    if(this.editMode){
      entry.id = this.paramId;
      this.diaryDataService.updateEntry(this.paramId, entry);
    }
    else{
      this.diaryDataService.onAddDiaryEntry(entry);
    }
    this.router.navigateByUrl("");
  }
}