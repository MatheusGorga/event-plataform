import { CheckCircle } from 'phosphor-react';

export function Lesson() {
  return (
    <a href='#'>
      <span className='text-gray300'>Terça • 22 de junho • 19h00</span>
      <div className='flex flex-col rounded border border-gray-500 p-4 mt-2'>
        <header className='flex item-center justify-between '>
          <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
            <CheckCircle size={20} />
            Conteudo liberado
          </span>
          <span className='text-xs font-bold rounded  px-2 py-[2px] text-white border border-green-300'>
            Ao vivo
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>Abertura do evento</strong>
      </div>
    </a>
  );
}
