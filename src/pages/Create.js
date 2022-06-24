import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Stack,
  Button,
  Container,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const useStyles = makeStyles({
  text: {
    backgroundColor: "aqua",
    textDecoration: "underline",
    "&:hover": {
      backgroundColor: "#03fc6f",
    },
  },
  separate: {
    margin: 20,
  },
  field: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function Create() {
  // useStyles
  const classes = useStyles();

  // hooks
  const history = useHistory();

  // states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [character, setCharacter] = useState("todos");

  // handling events
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:9005/notes`;
    if (title && description) {
      console.log("Data", title, description, character);
      await axios({
        method: "post",
        url,
        headers: { "Content-type": "application/json" },
        data: {
          title,
          details: description,
          category: character,
        },
      });
      history.push("/");
    }
  };

  return (
    <Container>
      {/* Typographies */}
      <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography>
      <Typography variant="h2" color="secondary" align="right">
        Create a New Note
      </Typography>
      <Typography variant="h3" color="aquamarine" align="left">
        Create a New Note
      </Typography>
      <Typography variant="h2" color="secondary" align="left" noWrap>
        Its best sometime to just work with what you really have in the exact
        moment
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        align="center"
        gutterBottom
        className={classes.text}
      >
        Create a New Note
      </Typography>

      {/* Stacks && Buttons */}
      <Stack spacing={7} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="primary" startIcon={<SendIcon />}>
          Outlined
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => console.log("clicked submition button")}
          endIcon={<ArrowForwardIosIcon />}
        >
          Outlined
        </Button>
      </Stack>

      {/* Icons */}
      <br />
      <AcUnitIcon />
      <AcUnitIcon color="primary" />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="medium" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="small" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon color="disabled" fontSize="small" />

      <br />
      <br />
      {/* Buttons + Icons */}
      <Button variant="contained" color="primary" startIcon={<SendIcon />}>
        Styled
      </Button>

      {/* Forms */}
      <form
        noValidate
        autoComplete="off"
        className={classes.separate}
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Line"
          variant="outlined"
          fullWidth
          required
          className={classes.field}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          label="Note Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          className={classes.field}
        />

        {/* Radio Buttons */}
        <FormControl className={classes.field}>
          <FormLabel>Note Character</FormLabel>
          <RadioGroup
            className={classes.field}
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />

            <FormControlLabel value="todos" control={<Radio />} label="Todos" />

            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />

            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="secondary"
          align-content="center"
          className={classes.field}
          fullWidth
          type="submit"
        >
          Primary
        </Button>
      </form>

      {/* Grid */}
      <Grid container>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" color="primary" align="center">
        {title}
      </Typography>

      <Typography variant="h6" color="primary" align="center">
        {description}
      </Typography>
    </Container>
  );
}
