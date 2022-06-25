import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm ",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug == props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <div
        className={`flex flex-col rounded border border-gray-500 p-4 mt-2  group-hover:border-green-500 ${
          isActiveLesson ? 'bg-green-500' : ''
        }`}
      >
        <header className='flex item-center justify-between '>
          {isLessonAvailable ? (
            <span
              className={`text-sm  font-medium flex items-center gap-2  ${
                isActiveLesson ? 'text-white' : 'text-blue-500'
              }`}
            >
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span
            className={`text-xs font-bold rounded  px-2 py-[2px] text-white border ${
              isActiveLesson ? 'border-white' : 'border-green-300'
            }`}
          >
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={` mt-5 block ${
            isActiveLesson ? 'text-white' : 'text-gray-200'
          } `}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
