import styles from './SubmitButton.module.css'

function SubmitButton({ text, name, options,  handleOnChange, value}){

return (

        <div>
            <button className= {styles.btn}>{text}</button>
        
        </div>



)


}


export default SubmitButton