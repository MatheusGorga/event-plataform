import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <main className='flex flex-1 '>
        {/* //TODO
            Criar component solicitando que o usuario acesse alguma aula
        */}
        {slug ? <Video lessonSlug={slug} /> : <div className='flex1' />}
        <Sidebar />
      </main>
    </div>
  );
}
