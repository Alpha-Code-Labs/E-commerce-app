

postman
```
//For uploading excell files using .xlsx
post http://localhost:8004/api/upload

form.data

upload .xlsx file

```

//for creating Groups

//default-group
Post http://localhost:8004/groups/default-group
```
{
  "groupName": "travel and expense booking project"
}
```

// Create a custom group
post http://localhost:8004/groups/custom-group
```
{
  "groupName": "Basic employee details group",
  "headers": ["employeeName", "designation", "salary"]
}
```

// Get all employees
```
get http://localhost:8004/groups/employees
```

// Get all groups
```
get http://localhost:8004/groups/groups
```

//update any field in employee database

PUT http://localhost:8004/groups/employees/:employeeId
```iu
```
{
  "designation": "Board Member and CEO"
}
```
// get headers from excel data
``` 
get http://localhost:8004/hrdata/employee/headers
```
 ```
 {
    "headers": [
        "_id",
        "employeeName",
        "employeeId",
        "designation",
        "department",
        "costCenter",
        "noOfYears",
        "__v"
    ]
}
```

//SchemaLessUpload 
```
post http://localhost:8012/schemaless/upload
```
```
req body . form.data
[{"key":"file","value":DataTwo.xlsx"}{"key":"masterId","value":"445562"}{"key":"masterName","value":"rockefeller"}]
```
```
output 
{
    "message": "Data saved successfully",
    "insertedId": "64c225e1f5dbf6fdbf204b84"
}
```
