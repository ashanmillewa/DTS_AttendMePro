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
// import Headrer from "../../components/Header/header";
// import Footer from "../../components/Footer/footer";
// import { Box, Button, TextField } from "@mui/material";
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

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       getSelectedPersonData();
//     }
//   };

//   const getSelectedPersonData = () => {
//     try {
//       if (!selectedServiceNo || !selectedServiceNo.target) {
//         return;
//       }

//       const value = selectedServiceNo.target.value;

//       if (value !== "") {
//         setServiceNo(value);
//         setBarcodeDate("");
//       } else {
//         setServiceNo("");
//         setBarcodeDate(dayjs().format("YYYY-MM-DD"));
//       }
//     } catch (error) {}
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
//     <div>
//       <Headrer />
//       <div className="containerDaily" style={{ margin: "30px" }}>
//         <Paper>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <Grid
//               container
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "flex-end",
//                 height: "10%",
//                 my: 1,
//               }}
//             >
//               <Grid item xs={12} sm={6} md={4} sx={{ mx: -3, marginBottom: 2 }}>
//                 <br />
//                 <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                   <DatePicker
//                     label="Date Selector"
//                     defaultValue={dayjs(dayjs(), "YYYY")}
//                     picker="year"
//                     size={"small"}
//                     inputReadOnly={true}
//                     allowClear={false}
//                     style={{
//                       backgroundColor: "#EB984E",
//                       borderTopRightRadius: 20,
//                       borderBottomRightRadius: 20,
//                       border: "none",
//                       fontSize: "20px",
//                     }}
//                   />

//                   <TextField
//                     sx={{ mx: 1, height: "55px" }}
//                     label="Search"
//                     size="medium"
//                     onChange={(e) => {
//                       setSelectedServiceNo(e);
//                     }}
//                     onKeyPress={handleKeyPress}
//                   />

//                   <Button
//                     style={{
//                       minWidth: "unset",
//                       width: "55px",
//                       height: "55px",
//                       paddingRight: "40px",
//                     }}
//                     onClick={() => {
//                       getSelectedPersonData();
//                     }}
//                   >
//                   </Button>
//                 </div>
//               </Grid>
//             </Grid>
//           </LocalizationProvider>
//           <Grid xs={3} sm={4} md={6}>
//             <TableContainer
//               component={Paper}
//               sx={{
//                 marginTop: "2px",
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 height: "640px",
//                 marginBottom: -83,
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
//                           sx={{ maxWidth: "200px", backgroundColor: "#d9e4ff" }}
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
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Box, Button, TextField } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

export default function CustomizedTables() {
  const [searchResults, setSearchResults] = useState(null);
  const [serviceNo, setServiceNo] = useState("");
  const [selectedServiceNo, setSelectedServiceNo] = useState("");
  const [barcodeDate, setBarcodeDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);
  const [tableHeight, setTableHeight] = useState("640px");

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `https://esystems.cdl.lk/backend-Test/UhfRfidGangwaySolution/UhfRfid/GetRFIDdetails?date=${barcodeDate}&Sno=${serviceNo}`;

      const response = await axios.get(url);
      const sortedResults = response.data.ResultSet.slice().sort(
        (a, b) => dayjs(b.BarcodeTime).unix() - dayjs(a.BarcodeTime).unix()
      );
      setSearchResults(sortedResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getSelectedPersonData();
    }
  };

  const getSelectedPersonData = () => {
    try {
      if (!selectedServiceNo || !selectedServiceNo.target) {
        return;
      }

      const value = selectedServiceNo.target.value;

      if (value !== "") {
        setServiceNo(value);
        setBarcodeDate("");
      } else {
        setServiceNo("");
        setBarcodeDate(dayjs().format("YYYY-MM-DD"));
      }
    } catch (error) {}
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

  const setResponsiveHeight = () => {
    const windowHeight = window.innerHeight;
    const headerHeight = 50; // Adjust this value according to your header's height
    const footerHeight = 245; // Adjust this value according to your footer's height
    const newHeight = windowHeight - headerHeight - footerHeight - 10;
    setTableHeight(`${newHeight}px`);
  };

  useEffect(() => {
    setResponsiveHeight();
    window.addEventListener("resize", setResponsiveHeight);
    return () => window.removeEventListener("resize", setResponsiveHeight);
  }, []);

  return (
    <div>
      <Header />
      <div className="containerDaily" style={{ margin: "30px" }}>
        <Paper>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                height: "10%",
                my: 1,
              }}
            >
              <Grid item xs={12} sm={6} md={4} sx={{ mx: -3, marginBottom: 2 }}>
                <br />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <DatePicker
                    label="Date Selector"
                    defaultValue={dayjs(dayjs(), "YYYY")}
                    picker="year"
                    size={"small"}
                    inputReadOnly={true}
                    allowClear={false}
                    style={{
                      backgroundColor: "#EB984E",
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      border: "none",
                      fontSize: "20px",
                    }}
                  />

                  <TextField
                    sx={{ mx: 1, height: "55px" }}
                    label="Search"
                    size="medium"
                    onChange={(e) => {
                      setSelectedServiceNo(e);
                    }}
                    onKeyPress={handleKeyPress}
                  />

                  <Button
                    style={{
                      minWidth: "unset",
                      width: "55px",
                      height: "55px",
                      paddingRight: "40px",
                    }}
                    onClick={() => {
                      getSelectedPersonData();
                    }}
                  ></Button>
                </div>
              </Grid>
            </Grid>
          </LocalizationProvider>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              sx={{
                marginTop: "2px",
                marginLeft: "20px",
                marginRight: "20px",
                height: tableHeight,
                marginBottom: -83,
                width: "calc(100% - 40px)",
                overflowY: "auto",
                "& .MuiTableCell-root": {
                  whiteSpace: "nowrap",
                },
                "@media (max-height: 600px)": {
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
                        maxWidth: "10%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Service No
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "20%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "20%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Vehicle No
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "20%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Vehicle RFID
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "20%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Clock
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "10%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "10%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Time
                    </TableCell>

                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "10%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "10%",
                        backgroundColor: "#1B3F95",
                      }}
                    >
                      Update Date
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#FFFFFF",
                        maxWidth: "10%",
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
                          sx={{ maxWidth: "10%", backgroundColor: "#d9e4ff" }}
                        >
                          {item.SeNo}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "20%", backgroundColor: "#ffffff" }}
                        >
                          {item.Name}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "20%", backgroundColor: "#ffffff" }}
                        >
                          {item.VehicalNo}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "20%", backgroundColor: "#ffffff" }}
                        >
                          {item.BarcodeNo}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "20%", backgroundColor: "#ffffff" }}
                        >
                          {item.ClockNo}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "10%", backgroundColor: "#ffffff" }}
                        >
                          {item.BarcodeDate}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "10%", backgroundColor: "#ffffff" }}
                        >
                          {item.BarcodeTime}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "10%", backgroundColor: "#ffffff" }}
                        >
                          {item.BarcodeSyncStatus}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "10%", backgroundColor: "#ffffff" }}
                        >
                          {item.UpdateDate}
                        </TableCell>
                        <TableCell
                          sx={{ maxWidth: "10%", backgroundColor: "#ffffff" }}
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
      <Footer style={{ position: "relative", bottom: 0, width: "100%" }} />
    </div>
  );
}
