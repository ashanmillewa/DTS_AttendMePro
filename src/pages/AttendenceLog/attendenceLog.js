import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import "./attendenceLog";
import SearchIcon from "@mui/icons-material/Search";

import Headrer from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Button, TextField } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

export default function CustomizedTables() {
  const [searchResults, setSearchResults] = useState(null);
  const [serviceNo, setServiceNo] = useState("");
  const [selectedServiceNo, setSelectedServiceNo] = useState("");
  //const [barcodeDate, setBarcodeDate] = useState("");
  const [barcodeDate, setBarcodeDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/GetRFIDdetails?date=${barcodeDate}&Sno=${serviceNo}`;

      const response = await axios.get(url);
      // Sort the searchResults by BarcodeTime in descending order
      const sortedResults = response.data.ResultSet.slice().sort(
        (a, b) => dayjs(b.BarcodeTime).unix() - dayjs(a.BarcodeTime).unix()
      );
      setSearchResults(sortedResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const getSelectedPersonData = () => {
    if (selectedServiceNo.target.value != "") {
      setServiceNo(selectedServiceNo.target.value);
      setBarcodeDate("");
    } else {
      setServiceNo("");
      setBarcodeDate(dayjs().format("YYYY-MM-DD"));
    }
  };

  useEffect(() => {
    fetchData();
  }, [barcodeDate, serviceNo]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      {/* style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} */}
      {" "}
      <Headrer />
      <div className="containerDaily" style={{ margin: "30px" }}>
        <Paper>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <DatePicker
                  label="Date Selector"
                  value={dayjs(barcodeDate, "YYYY-MM-DD")}
                  onChange={(newValue) =>
                    setBarcodeDate(
                      newValue
                        ? newValue.format("YYYY-MM-DD")
                        : dayjs().format("YYYY-MM-DD")
                    )
                  }
                  maxDate={dayjs()}
                />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    label="Search"
                    variant="outlined"
                    style={{ flex: 1, marginRight: "8px" }}
                    onChange={(e) => {
                      setSelectedServiceNo(e);
                    }}
                  />
                  <Button
                    variant="contained"
                    style={{ minWidth: "unset", width: "55px", height: "56px" }}
                    onClick={() => {
                      getSelectedPersonData();
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </LocalizationProvider>
          <Grid xs={3} sm={4} md={6}>

          <TableContainer
            component={Paper}
            sx={{
              marginTop: "2px",
              marginLeft: "20px",
              marginRight: "20px",
              height: "575px",  
              marginBottom: -83,
              width: "calc(100% - 40px)",
              overflowY: "auto",
              "& .MuiTableCell-root": {
                whiteSpace: "nowrap",
              },
              "@media (max-width: 600px)": {
                height: "400px",  
              },
            }}
          >
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#1B3F95",
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                }}
              >
                <TableRow>
                  
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Service No
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Vehicle No
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Vehicle RFID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Clock
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Time
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Update Date
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      maxWidth: "200px",
                      backgroundColor: "#1B3F95",
                    }}
                  >
                    Update Time
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading || searchResults === null ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : (
                  searchResults.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.SeNo}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.Name}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.VehicalNo}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.BarcodeNo}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.ClockNo}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.BarcodeDate}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.BarcodeTime}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.BarcodeSyncStatus}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.UpdateDate}
                      </TableCell>
                      <TableCell
                        sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
                      >
                        {item.UpdateTime}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
  
        </Paper>
      
      </div>

     <div className="footerattend">
      <Footer />
      </div>

     
    </div>
    
  );
}




// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import axios from "axios";
// import dayjs from "dayjs";
// import React, { useEffect, useState } from "react";
// import "./attendenceLog";
// import SearchIcon from "@mui/icons-material/Search";

// import Header from "../../components/Header/header";
// import Footer from "../../components/Footer/footer";
// import { Button, TextField } from "@mui/material";
// import { experimentalStyled as styled } from "@mui/material/styles";

// export default function CustomizedTables() {
//   const [searchResults, setSearchResults] = useState(null);
//   const [serviceNo, setServiceNo] = useState("");
//   const [selectedServiceNo, setSelectedServiceNo] = useState("");
//   const [barcodeDate, setBarcodeDate] = useState(dayjs().format("YYYY-MM-DD"));
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       let url = `https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/GetRFIDdetails?date=${barcodeDate}&Sno=${serviceNo}`;

//       const response = await axios.get(url);
//       const sortedResults = response.data.ResultSet.slice().sort(
//         (a, b) => dayjs(b.BarcodeTime).unix() - dayjs(a.BarcodeTime).unix()
//       );
//       setSearchResults(sortedResults);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   const getSelectedPersonData = () => {
//     if (selectedServiceNo.target.value !== "") {
//       setServiceNo(selectedServiceNo.target.value);
//       setBarcodeDate("");
//     } else {
//       setServiceNo("");
//       setBarcodeDate(dayjs().format("YYYY-MM-DD"));
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [barcodeDate, serviceNo]);

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <Header />
//       <div className="containerDaily" style={{ margin: "30px" }}>
//         <Paper>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <Grid
//               container
//               spacing={{ xs: 2, md: 3 }}
//               columns={{ xs: 4, sm: 8, md: 12 }}
//             >
//               <Grid item xs={2} sm={4} md={4}>
//                 <DatePicker
//                   label="Date Selector"
//                   value={dayjs(barcodeDate, "YYYY-MM-DD")}
//                   onChange={(newValue) =>
//                     setBarcodeDate(
//                       newValue
//                         ? newValue.format("YYYY-MM-DD")
//                         : dayjs().format("YYYY-MM-DD")
//                     )
//                   }
//                   maxDate={dayjs()}
//                 />
//               </Grid>
//               <Grid item xs={2} sm={4} md={4}>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <TextField
//                     label="Search"
//                     variant="outlined"
//                     style={{ flex: 1, marginRight: "8px" }}
//                     onChange={(e) => {
//                       setSelectedServiceNo(e);
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     style={{ minWidth: "unset", width: "55px", height: "56px" }}
//                     onClick={() => {
//                       getSelectedPersonData();
//                     }}
//                   >
//                     <SearchIcon />
//                   </Button>
//                 </div>
//               </Grid>
//             </Grid>
//           </LocalizationProvider>
//           <Grid xs={3} sm={4} md={6}>
//             <TableContainer
//               component={Paper}
//               sx={{
//                 marginTop: "20px",
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 height: "575px",
//                 marginBottom: -85,
//                 width: "calc(100% - 40px)",
//                 overflowY: "auto",
//                 "& .MuiTableCell-root": {
//                   whiteSpace: "nowrap",
//                 },
//                 "@media (max-width: 600px)": {
//                   height: "400px",
//                 },
//               }}
//             >
//               <Table>
//                 <TableHead
//                   sx={{
//                     backgroundColor: "#1B3F95",
//                     position: "sticky",
//                     top: 0,
//                     zIndex: 1,
//                   }}
//                 >
//                   <TableRow>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Service No
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Name
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Vehicle No
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Vehicle RFID
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Clock
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Date
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Time
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Status
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Update Date
//                     </TableCell>
//                     <TableCell
//                       sx={{
//                         color: "#FFFFFF",
//                         maxWidth: "200px",
//                         backgroundColor: "#1B3F95",
//                       }}
//                     >
//                       Update Time
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {loading || searchResults === null ? (
//                     <TableRow>
//                       <TableCell colSpan={3} align="center">
//                         Loading...
//                       </TableCell>
//                     </TableRow>
//                   ) : (
//                     searchResults.map((item, index) => (
//                       <TableRow key={index}>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.SeNo}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.Name}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.VehicalNo}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.BarcodeNo}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.ClockNo}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.BarcodeDate}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.BarcodeTime}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.BarcodeSyncStatus}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.UpdateDate}
//                         </TableCell>
//                         <TableCell
//                           sx={{ maxWidth: "200px", backgroundColor: "#ffffff" }}
//                         >
//                           {item.UpdateTime}
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   )}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Paper>
//       </div>
//       <Footer />
//     </div>
//   );
// }
 