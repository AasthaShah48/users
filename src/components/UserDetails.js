import React ,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from "@mui/material/IconButton";
import { getUser } from "../redux/userSlice";
import { NavLink , Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ConfirmationDialogRaw from './FormsUI/Confirmation';


function UserDetails() {

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
     }
  
  const columns = [
    { field: "id", headerName: "Id" },
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "E-Mail" },
    { field: "gender", headerName: "Gender" },
    { field: "phone", headerName: "Contact Number" },
    { field: "hobby", headerName: "Hobby" },
    {
      field: "actions",
      headerName: "actions",
      renderCell: (params) => {
              return(     
                <>                      
               <NavLink to={"/users/edit/" + params.row.id}>
                <IconButton onClick={() => {
                dispatch(getUser({ id: params.row.id}));
              }}>
                <BorderColorIcon
                  variant="contained"
                  color='secondary'  />                
            
              </IconButton>
               </NavLink>    

               <IconButton onClick={() => {
                setOpen(true);
              }}>
                <DeleteIcon
                  variant="contained"
                  color='secondary'                 
                />
                 
              </IconButton>

              <ConfirmationDialogRaw
                keepMounted
                open={open}
                value={params.row.id}
                onClose={handleClose}
               />
               </>     
         )
      }
}, ];

  return (
    <>
      <div className="displayUsers" style={{ margin: '50px' , padding:'20px' }}>
               
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            rowsPerPageOptions={[5]}           
          />
        </div>
 
        <Grid container xs={12} justifyContent='flex-end' margin= '20px' padding='20px'>
          <Link to="/users/add" className="btn btn-link">
            <Button color='secondary' endIcon={<SendIcon />} variant='contained'>Add User</Button>
          </Link>
        </Grid>
      </div>
    </>

  );

};
export default UserDetails;
