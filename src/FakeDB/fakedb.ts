interface SubDepartments{
    name:string
}
export interface DepartmentsType{
    department: string;
    sub_departments:SubDepartments[];
}

export const departements:DepartmentsType[] =[
	{
        department: "customer_service",
        sub_departments: [
            {name:"support"},
            {name:"customer_success"}
        ]
	},
	{
        department: "design",
        sub_departments: [
            {name:"graphic_design"},
            {name:"photo_design"},
            {name:"web_design"}
        ]
	}
]
