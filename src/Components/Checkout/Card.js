import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
import './Card.css';
import 'react-credit-cards/es/styles-compiled.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Card() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
        />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" /> */}
          <TextField 
          required
          type='tel'
          name='number'
          placeholder='Card Number' 
          value={number} 
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}/>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type='text' name='name' 
            placeholder='Name' 
            value={name} 
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required 
          type='text' name='expiry' 
            placeholder='MM/YY Expiry' 
            value={expiry} 
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type='tel' name='cvc' 
            placeholder='CVC' 
            value={cvc} 
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      {/* <Cards
            number={number}
            name={name}
            xpiry={expiry}
            cvc={CVC}
            focused={focus}
        />
        <br/>
        <form>
            <input type='tel' name='number' 
            placeholder='Card Number' 
            value={number} 
            onChange={e => setNumber(e.target.value)}
            ocFocus={e => setFocus(e.target.name)}
            />

            <input type='text' name='name' 
            placeholder='Name' 
            value={name} 
            onChange={e => setName(e.target.value)}
            ocFocus={e => setFocus(e.target.name)}
            />
            <input type='text' name='expiry' 
            placeholder='MM/YY Expiry' 
            value={expiry} 
            onChange={e => setExpiry(e.target.value)}
            ocFocus={e => setFocus(e.target.name)}
            />
            <input type='tel' name='cvc' 
            placeholder='CVC' 
            value={CVC} 
            onChange={e => setCvc(e.target.value)}
            ocFocus={e => setFocus(e.target.name)}
            />

        </form> */}
    
    </React.Fragment>

     
  );
}