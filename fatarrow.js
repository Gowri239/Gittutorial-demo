class Student{
    static count=0;
    constructor(name,age,phone_number,marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.marks=marks;
        Student.count++;
    }
    isEligible(){
        if(this.marks>40){
            console.log("Eligible");
        }else{
            console.log("Not Eligible");
        }
    }
    static countStudents(){
        console.log("No.of students:"+Student.count)
    }
    setPlacementAge(min_age){
        return (min_marks) => {
            if(this.marks>min_marks && this.age > min_age){
                console.log(`{this.name} is eligible for placement`)
            }else{
                console.log(`{this.name} is not eligible for placement`)
            }
        }
    }
    
}
const S1 = new Student('Asmi',18,973458986,100);
const S2 = new Student('Gowri',20,973458986,70);
const S3 = new Student('Gayi',19,973458986,50);
const S4 = new Student('kittu',17,973458986,75);
const S5 = new Student('krishna',22,973458986,80);


console.log(S1.marks)
S1.isEligible()
Student.countStudents()
Asmi.setPlacementAge(18)(50)
Gowri.setPlacementAge(18)(50)
Gayi.setPlacementAge(18)(50)
kittu.setPlacementAge(18)(50)
krishna.setPlacementAge(18)(50)