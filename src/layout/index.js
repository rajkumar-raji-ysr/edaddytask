import {Header} from './header'

export const Layout=({children=''})=>{

return(
   <>
    <Header/>
   <div className='mt-4 container-fluid'>
   {children}
   </div>
   </>
)

}