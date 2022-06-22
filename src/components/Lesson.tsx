import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm ",
    {
      locale: ptBR,
    }
  );

  return (
    <a href='#'>
      <span className='text-gray-300'>{availableDateFormatted}</span>
      <div className='flex flex-col rounded border border-gray-500 p-4 mt-2'>
        <header className='flex item-center justify-between '>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span className='text-xs font-bold rounded  px-2 py-[2px] text-white border border-green-300'>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>{props.title}</strong>
      </div>
    </a>
  );
}
