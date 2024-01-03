import { useState } from 'react';
import './qualification.css';
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from 'react-icons/hi';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className='qualification__icon' />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className='qualification__icon' />
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Classes Preparatoires</h3>
                <span className='qualification__subtitle'>CPGE Mohammedia</span>
                <div className='qualification__calendar'>
                  <HiOutlineCalendar className='qualification__calendar-icon' />
                  2018-2021
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Licence Energetique</h3>
                <span className='qualification__subtitle'>
                  Faculte des sciences Ain Chock
                </span>
                <div className='qualification__calendar'>
                  <HiOutlineCalendar className='qualification__calendar-icon' />
                  2021-2022
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>FullStack MERN</h3>
                <span className='qualification__subtitle'>
                  JobInTech Program
                </span>
                <div className='qualification__calendar'>
                  <HiOutlineCalendar className='qualification__calendar-icon' />
                  07/23 - 12/23
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Intern FullStack MERN Developer
                </h3>
                <span className='qualification__subtitle'>Arkx Academy</span>
                <div className='qualification__calendar'>
                  <HiOutlineCalendar className='qualification__calendar-icon' />
                  07/23-12/23
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
