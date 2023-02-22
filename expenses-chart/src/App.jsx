import React from "react";
import logo from "./assets/logo.svg";
import data from "./data/data.json";

function App() {
  return (
    <>
      <main className='mx-auto mt-10 grid min-h-screen max-w-lg items-center font-DMsans sm:mt-0'>
        <section className='px-2 sm:px-0'>
          <div className='rounded-2xl bg-soft-red'>
            <div className='grid grid-cols-2 p-4 text-pale-orange'>
              <div className='space-y-2'>
                <p className='text-sm'>My balance</p>
                <h1 className='text-2xl font-[700] sm:text-3xl'>$921.48</h1>
              </div>
              <div className='flex justify-end'>
                <img src={logo} alt='' className='w-16' />
              </div>
            </div>
          </div>
          {/* Card */}
          <div className='mt-5 rounded-2xl bg-pale-orange'>
            <div className='p-4 sm:p-8'>
              {/* Spending */}
              <div className='mb-5  sm:mb-10'>
                <h1 className='text-2xl font-[700] text-dark-brown sm:text-3xl'>
                  Spending - Last 7 days
                </h1>
              </div>
              {/* Charts */}
              <div className='mx-0 grid grid-cols-7'>
                <div className='group mt-auto'>
                  <p className='hiddenPrice'>${data[0].amount}</p>
                  <div className='gridChart h-[3.5rem]'></div>
                </div>
                <div className='group mt-auto '>
                  <p className='hiddenPrice'>${data[1].amount}</p>
                  <div className='gridChart h-[7rem]'></div>
                </div>
                <div className='group mt-auto'>
                  <p className='hiddenPrice'>${data[2].amount}</p>
                  <div className='mx-1 mt-auto h-[10rem] cursor-pointer rounded-[4px] bg-cyan duration-100 hover:bg-opacity-30 sm:mx-2 sm:rounded-md'></div>
                </div>
                <div className='group mt-auto '>
                  <p className='hiddenPrice'>${data[3].amount}</p>
                  <div className='gridChart h-[7rem]'></div>
                </div>
                <div className='group mt-auto '>
                  <p className='hiddenPrice'>${data[4].amount}</p>
                  <div className='gridChart h-[4rem]'></div>
                </div>
                <div className='group mt-auto '>
                  <p className='hiddenPrice'>${data[5].amount}</p>
                  <div className='gridChart h-[8rem]'></div>
                </div>
                <div className='group mt-auto '>
                  <p className='hiddenPrice'>${data[6].amount}</p>
                  <div className='gridChart h-[5rem]'></div>
                </div>
                {data.map((dayData) => {
                  return (
                    <p key={dayData.day} className='dayLabel'>
                      {dayData.day}
                    </p>
                  );
                })}
              </div>
              <div className='mt-6 border-b border-cream'></div>
              {/* Total */}
              <div className='mt-6 grid grid-cols-2 '>
                <div className=''>
                  <p className='text-sm text-medium-brown sm:text-base'>
                    Total this month
                  </p>
                  <h1 className='text-2xl font-[700] text-dark-brown sm:text-3xl'>
                    $478.33
                  </h1>
                </div>
                <div className='mt-auto text-right'>
                  <p className='font-[700] text-dark-brown'>+2.4%</p>
                  <p className='text-sm text-medium-brown sm:text-base'>
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
