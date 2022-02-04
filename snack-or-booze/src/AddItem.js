
import SnackOrBoozeApi from "./Api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
function AddItem() {
const history = useHistory();
  const INITIAL_DATA = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [foodType, setFoodType] = useState('snacks')

  const handleSelectChange = (e) => {
      setFoodType(e.target.value)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const parseId = (id) => {
      const idArr = id.trim().split(' ')
      if (idArr.length > 1){
          return idArr.join("-")
      }
      return id
  }

  async function add(){
      try{
          await SnackOrBoozeApi.addItem(foodType, {id: parseId(formData.name.toLowerCase()), ...formData});
      }catch(e){
          console.log(e)
      }
  }

  async function handleSubmit(e){
      e.preventDefault() 
      await add()
      history.push('/')
      }
      


  return (
    <Form onSubmit={handleSubmit} className="card p-5">
        <h3 className="p-2">Add or Snack or Drink</h3>
      <FormGroup>
        <Label>Select type of Item</Label>
        <Input id="foodType" name="foodType" type="select" onChange={handleSelectChange} required>
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Menu Item Name"
          type="text"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="Menu Item Description"
          type="text"
          onChange={handleChange}
          value={formData.description}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          id="recipe"
          name="recipe"
          placeholder="Menu Item Recipe"
          type="textarea"
          onChange={handleChange}
          value={formData.recipe}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          id="serve"
          name="serve"
          placeholder="Serving Instructions"
          type="text"
          onChange={handleChange}
          value={formData.serve}
          required
        />
      </FormGroup>
      <Button className="mt-2"type="submit">Submit</Button>
    </Form>
  );
}

export default AddItem;
