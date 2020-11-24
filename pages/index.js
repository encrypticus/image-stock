import { PageHead } from '../components/Head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header />

      <main />

      <footer />
    </div>
  );
}
