import express, {Request, Response} from 'express';
import { StudentSchema } from './schema/studentSchema';

const app = express();
const port = 3000;
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  console.log(req.headers);
});

app.post('/student', (req: Request, res: Response) => {
  const studentData = StudentSchema.safeParse(req.body);

  if (!studentData.success) {
    return res.status(400).json({
      message: 'Invalid student data',
      issues: studentData.error.issues,
    });
  }
  const student = studentData.data;
  console.log('Received student data:', student);
  return res.status(201).json({
    message: 'Student data received successfully',
    student: student,
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});