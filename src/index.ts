import express from 'express';
import { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 2223;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

interface SampleData {
  userId: string;
  userName: string;
  city: string;
  state: string;
  zip: number,
}

const getUsers = (request: Request, response: Response, next: NextFunction) => {
  request;
  const users: SampleData[] = [
    { userId: 'u_123', userName: 'Ted Mosby', city: 'New York', state: 'NY', zip: 12345 },
    { userId: 'u_124', userName: 'Barney Stinson', city: 'New York', state: 'NY', zip: 12345 },
  ];
  next;
  response.status(200).json(users);
};

app.get('/users', getUsers);
