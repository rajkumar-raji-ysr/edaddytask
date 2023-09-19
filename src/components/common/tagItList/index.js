
import './tagItList.scss'

export const TagItList=({data=[]})=>{

    return(
        <div className='tagItListContiner'>

            <ul className='tagList'>
                {data?.map(({label,value})=><li className='tagListIteam'>{label}</li> )}
                
            </ul>

        </div>
    )

}