import React from 'react'
import Nav from './nav'

type Props = {}
const Header = (props: Props ) => {
  return (
    <header className="">
            <div className="bg-[#363F4D] py-4">
                <div className="max-w-7xl grid grid-cols-3 gap-2 mx-auto text-white font-bold">
                    <div className="cursor-pointer">
                        <a href="#"><i className="ri-phone-line"></i> + 0865 9989 31</a> | 
                        <a href="#"><i className="ri-mail-line"></i> Dungnc@gmail.com</a>
                    </div>
                    <div>
                        
                        <input type="text" id="text-search" name="" value="" className="caret-blue-500 text-black" />
                        <button type="button" id="btn-search">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>  
                        </button> 
                    </div>
                    
                <div>
                
                    
                <div  className="float-right login">
                    <a href="/#/signin">Đăng Nhập</a> | 
                    <a href="/#/signup">Đăng Ký</a> 
                </div>
                {/* <div  className="float-right acc hidden">
                        <span id="username"></span> | 
                        <button id="logout" className="btn-logout" title="Đăng xuất"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg></button>
                    </div> */}
                </div>
                    
                </div>
            </div>
            <Nav />
        </header>
  )
}

export default Header