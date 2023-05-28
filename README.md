# StudentAssignment


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

