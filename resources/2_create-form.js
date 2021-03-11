const Form = (props)=>{

  const {formData}  = props;
  
return (<form>
    <p>{JSON.stringify(formData)}</p> 
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input
     value={formData.name}
     type="text" 
     className="form-control" 
     id="name" 
     name="name" 
     aria-describedby="emailHelp" 
     placeholder="Lord of the Rings"
     onChange={props.handleChange}
      />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input 
    value={formData.description}
    type="text" 
    className="form-control" 
    id="description" 
    name="description" 
    placeholder="Somewhere in Middle-earth..."
    onChange={props.handleChange}
     />
  </div>
  <div className="form-group">
    <label htmlFor="description">Rating</label>
    <input 
    value={formData.rating}
    type="number" 
    max="5" min="0" 
    className="form-control" 
    id="rating" 
    name="rating" 
    placeholder="3" 
    onChange={props.handleChange}
    />
    <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
  </div>
  <div className="form-group">
    <label htmlFor="image">Image</label>
    <input 
    value={formData.image}
    type="text" 
    className="form-control" 
    id="image" 
    name="image" 
    placeholder="http://....." 
    onChange={props.handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="cover">Cover</label>
    <input 
    value={formData.cover}
    type="text" 
    className="form-control" 
    id="cover" 
    name="cover" 
    placeholder="http://......" 
    onChange={props.handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="longDesc">Long Description</label>
    <textarea 
    value={formData.longDesc}
    className="form-control" 
    id="longDesc"
    name="longDesc" 
    rows="3"
    onChange={props.handleChange}
    >
    </textarea>
  </div>
  <div className="form-group">
    <label htmlFor="genre">Genre</label>
    <select
     multiple
     className="form-control" 
     id="genre"
     name="genre"
     onChange={props.handleGenreChange}
     >
      <option>drama</option>
      <option>music</option>
      <option>adventure</option>
      <option>historical</option>
      <option>action</option>
    </select>
  </div>
</form>)
}

export default Form;