import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvMainService {
  public IdUser: number;
  public Role: string;
  public Token: string;
  public IdCourse: number;
  public IdPath: number;
  public IdTraineeToReview: number;
  public NameTraineeToReview: string;
  public selectedCourseName: string;
  public teacherName: string;
  public editSelfEnrollCheckbox: boolean;

  public strWSPath: string = "http://localhost:8080/api/v1/";

  constructor(private http: HttpClient) {
  }
}
