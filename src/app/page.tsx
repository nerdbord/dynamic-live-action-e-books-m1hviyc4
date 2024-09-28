
import { getUserByEmail } from './actions/user';
import Container from './components/Container/Container';

export default async function Home() {

  const user = await getUserByEmail('lemur@lemur.com');

  if (!user) {
    return (
      <Container>
        <h1>Nie znaleziono użytkownika</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Witaj {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Przygód: {user.adventures}</p>
      <p>Zadań: {user.tasks}</p>
      <p>EXP: {user.experience}</p>
      <p>Ranking: 4</p>
  
    </Container>
  );
}

