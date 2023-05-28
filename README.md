# StudentAssignment



## Installation

Clone my repo -- git clone <clone address>



# To work with JSON
```bash
  
  npm install
  npm run dev
```
    


## API Reference for json file

#### Get all students

```http
  GET api/student/all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `string` | **Required**. Page and PageSize required in req.query |
| `pageSize` | `string` | **Required**. Page and PageSize required in req.query |

#### Filter students 

```http
  GET api/student/jsonfilter
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `string` | **Required**. req.body  |
| `pageSize`      | `string` | **Required**. req.body  |
| `student_name`      | `string` | req.body  |
| `total_marks`      | `string` | req.body  |



# To work with postgres DB
```bash
  
  npm install
  npm start
```
#### In model index js file, set db.username, db.password, hostname, port, according to your system.
#### see the routes file and hit the url 
  ```http 
     http://localhost:5002/api/student/ 
     http://localhost:5002/api/student/create 
     http://localhost:5002/api/student/update/:id
     http://localhost:5002/api/student/filter
  ```
