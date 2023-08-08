import { User } from "../interfaces/User/User";

export const fetchUsers = async (): Promise<User[]> => {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));



    const usersData: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
      { id: 5, name: 'Michael Clark', email: 'michael@example.com' },
      { id: 6, name: 'Sarah Lee', email: 'sarah@example.com' },
      { id: 7, name: 'David Wilson', email: 'david@example.com' },
      { id: 8, name: 'Jennifer Anderson', email: 'jennifer@example.com' },
      { id: 9, name: 'James Thomas', email: 'james@example.com' },
      { id: 10, name: 'Linda Martinez', email: 'linda@example.com' },
      { id: 11, name: 'William Robinson', email: 'william@example.com' },
      { id: 12, name: 'Karen Hall', email: 'karen@example.com' },
      { id: 13, name: 'Charles Garcia', email: 'charles@example.com' },
      { id: 14, name: 'Jessica Martinez', email: 'jessica@example.com' },
      { id: 15, name: 'Richard Thompson', email: 'richard@example.com' },
      { id: 16, name: 'Patricia Davis', email: 'patricia@example.com' },
      { id: 17, name: 'Matthew Brown', email: 'matthew@example.com' },
      { id: 18, name: 'Laura Rodriguez', email: 'laura@example.com' },
      { id: 19, name: 'Daniel Martinez', email: 'daniel@example.com' },
      { id: 20, name: 'Elizabeth Clark', email: 'elizabeth@example.com' },
    ];
    
    
    return usersData;
  };