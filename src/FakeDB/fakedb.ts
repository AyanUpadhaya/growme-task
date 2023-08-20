interface SubDepartments{
    name:string
    isChecked?:boolean
}
export interface DepartmentsType{
    department: string;
    sub_departments:SubDepartments[];

}

export const departements:DepartmentsType[] =[
	{
        department: "Customer Service",
        sub_departments: [
            {name:"Support"},
            {name:"Customer Success"}
        ]
	},
	{
        department: "Design",
        sub_departments: [
            {name:"Graphic Design"},
            {name:"Photo Design"},
            {name:"Web Design"}
        ]
	},
	{
        department: "Business",
        sub_departments: [
            {name:"Application"},
            {name:"SEO"},
            {name:"Web Design"}
        ]
	}
]
