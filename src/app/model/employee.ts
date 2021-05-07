



export class Employee {
  Id:string;
  Name: string;
  Date_Of_Birth:string;
  Location:string;
  Salary:number;
  DepartmentId:number;
  PhoneNumber:number;
  constructor(n:string,dob:string,loc:string,s:number,deptId:number,phoneNum:number) {
    this.Name=n;
    this.Date_Of_Birth=dob;
    this.Location=loc;
    this.Salary=s;
    this.DepartmentId=deptId;
    this.PhoneNumber=phoneNum;


  }
}
