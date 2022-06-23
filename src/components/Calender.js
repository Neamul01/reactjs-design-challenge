import React from 'react';

const Calender = () => {
    return (
        <section className='flex justify-center py-10'>
            <div className='w-3/5'>
                <div className='flex justify-between'>
                    <h2 className="text-2xl">Timeline</h2>
                    <div className='flex gap-4'>
                        <p>Week</p>
                        <p>10-16 December, 2019</p>
                    </div>
                </div>
                <div className='shadow-md rounded-lg h-5/6 overflow-hidden'>
                    <div className='grid grid-cols-8 py-8'>
                        <div></div>
                        <div>
                            <p>Sun</p>
                            <p>10</p>
                        </div>
                        <div>
                            <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div>
                            <p>Tue</p>
                            <p>12</p>
                        </div>
                        <div>
                            <p>Wed</p>
                            <p>13</p>
                        </div>
                        <div>
                            <p>Thu</p>
                            <p>14</p>
                        </div>
                        <div>
                            <p>Fri</p>
                            <p>15</p>
                        </div>
                        <div>
                            <p>Sat</p>
                            <p>16</p>
                        </div>
                    </div>
                    <div className='border-t-2'>
                        {/* block 1 */}
                        <div className='grid grid-cols-8 p-0 m-0'>
                            <div className='w-100 h-20'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border-y-2 border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                            <div className='w-100 h-20 border border-t-0'>
                                {/* <p>Sun</p>
                                <p>10</p> */}
                            </div>
                        </div>
                        {/* block 2 */}
                        <div>
                            <div className='grid grid-cols-8 p-0 m-0'>
                                <div className='w-100 h-20'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border-y-2'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                            </div>
                        </div>
                        {/* block 3 */}
                        <div>
                            <div className='grid grid-cols-8 p-0 m-0'>
                                <div className='w-100 h-20'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border-y-2'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                            </div>
                        </div>
                        {/* block 4 */}
                        <div>
                            <div className='grid grid-cols-8 p-0 m-0'>
                                <div className='w-100 h-20'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border-y-2'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                            </div>
                        </div>
                        {/* block 5 */}
                        <div>
                            <div className='grid grid-cols-8 p-0 m-0'>
                                <div className='w-100 h-20'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border-y-2'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                            </div>
                        </div>
                        {/* block 6 */}
                        <div>
                            <div className='grid grid-cols-8 p-0 m-0'>
                                <div className='w-100 h-20 '>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border-y-2'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                                <div className='w-100 h-20 border'>
                                    {/* <p>Sun</p>
                                <p>10</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Calender;