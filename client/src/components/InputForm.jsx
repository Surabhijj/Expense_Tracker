import '../Input.css'
export  default function InputForm({formData, handleSubmit, onSelect}){

 
    return(
      <div className="form-container">
     <form onSubmit={handleSubmit}>
      <h3>Personal Expense Tracker</h3>

      <label htmlFor="category">Category:</label>
      <input onChange = {onSelect}
      value={formData.category} type="text" id="category" name="category" required />
     <br></br>

     <label htmlFor="amount">Amount:</label>
      <input onChange = {onSelect}
      value={formData.amount}
      type="number" id="amount" name="amount" step="0.01" required />
     <br>
     </br>

     <label htmlFor="date">date:</label>
      <input onChange = {onSelect} 
      value={formData.date}
      type="date" id="date" name="date" required />
     

      <input type="submit" value="Submit" />
    </form>
    </div>
    
    );
}
