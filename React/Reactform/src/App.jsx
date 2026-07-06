/* eslint-disable no-unused-vars */
import { useForm} from 'react-hook-form';
import './App.css'


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },//issubmitting represent that the currently the form is in the submitting state or not if it is so this is true otherwise false
  } = useForm();

   async function onSubmit(data)
    {
      //API call is simulate here
      await new Promise((resolve)=>setTimeout(resolve,5000));
      console.log("Submitting the form",data);
    }



  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? 'input-error':""}
          {...register("firstName",
           { required: true,
           minLength:{value:3,message:"min len atleast 3"},
           maxLength:{value:6, message:"max len atmost 6"}
           })} />
           {errors.firstName && <p className='error-msg'>
            {errors.firstName.message}</p>}
      </div>
      
      <div>
        <label>Middle Name:</label>
        <input //register field ko form ke saath bind karta hain 
        {...register("middleName")}/>
      </div>

      <div>
        <label>Last Name:</label>
        <input
        {...register("lastName", 
          { pattern:{value:/^[A-Za-z]+$/i,
            message:"Last name is not as perr the rules"
          }  })}/>
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting":"Submit"}/>
    </form>
  )
}

export default App
