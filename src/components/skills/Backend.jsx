import { HiCheckBadge } from 'react-icons/hi2';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Developer</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Node.js</h3>
          </div>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Express.js</h3>
          </div>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Mongodb</h3>
          </div>
        </div>
        <div className='skills__group'>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Primsa ORM</h3>
          </div>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Git</h3>
          </div>
          <div className='skills__data'>
            <HiCheckBadge />
            <h3 className='skills__name'>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
