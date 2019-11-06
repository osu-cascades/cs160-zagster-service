const examples = require('express').Router();

examples.get('/', (req, res) => res.send('I am listening!'));
examples.get('/ice_cream', (req, res) => res.send('Mint ice cream'));

// 2019

examples.get('/you_lazy', (req, res) => res.send('Okay Boomer'));
examples.get('/cs', (req, res) => res.send('COMPUTER SCIENCE IS AWESOME!'));
examples.get('/HELLO', (req,res)=> res.send('Welcome!'));
examples.get('/LightningInABottle', (req,res) => res.send('Blip'));
examples.get('/help!', (req, res) => res.send('Everything is going to be ok.'));
examples.get('/why_did_the_chicken_cross_the_road',(req, res) => res.send('Well?'));
examples.get('/howdy', (req, res) => res.send('Howdy, there partner!!'));
examples.get('/how_are_you_sugar', (req, res) => res.send('Better now you\'re here!'));
examples.get('/winter', (req, res) => res.send('S N O W!'));
examples.get('/bend',(req,res)=> res.send('Beer and Puffys'));
examples.get('/yeet', (req, res) => res.send('OOF'));
examples.get('/hi', (req, res) => res.send('hello back'));
examples.get('/num nums', (req, res) => res.send('food'));
examples.get('/pizza', (req, res) => res.send('Pepperoni Pizza'));
examples.get('/uh_oh', (req, res) => res.send('Stinky'));
examples.get('/tired', (req,res) => res.send ('Ligma'));
examples.get('/why_frog_sad', (req, res) => res.send('His car got toad :('));
examples.get('/loss', (req, res) => res.send('|, ||,||, |_'));
examples.get('/listening', (req, res) => res.send('Nobody is listening!'));
examples.get('/best_dog', (req, res) => res.send('All doggos are the best!'));
examples.get('/weather', (req, res) => res.send('Look out the window!'));
examples.get('/dogs', (req, res) => res.send('Adopt don\'t shop!'));
examples.get('/money', (req, res) => res.send('Show me the money'));
examples.get('/minecraft', (req, res) => res.send('*Digs straight down*'));
examples.get('/query', (req, res) => res.send('idk google it'));
examples.get('/please_help', (req,res) => res.send('Why do I care?'));

// 2018

examples.get('/RKS', (req, res) => res.send('MintBerryCrunch'));
examples.get('/HemenwayThanksgiving', (req, res) => res.send('SweetPotato'));
examples.get('/Cat_nya', (req, res) => res.send('Nyaaaaaaaaaaaaaaa!'));
examples.get('/stubaruu', (req, res) => res.send('stuff'));
examples.get('/karp', (req, res) => res.send('Dogs'));
examples.get('/NOID', (req, res) => res.send('enter the VOID'));
examples.get('/can_I_get_a_hoo_yaa', (req,res) => res.send('hoo yaa'));
examples.get('/Hungry', (req, res) => res.send('Eat Food'));
examples.get('/wright', (req, res) => res.send('Pasta'));
examples.get('/Stewart', (req, res) => res.send('My dogs'));
examples.get('/Bertram', (req, res) => res.send('Fire Hue'));
examples.get('/kolb', (req, res) => res.send('Nice'));
examples.get('/best_town', (req, res) => res.send('Bend, obviously'));
examples.get('/football_team', (req, res) => res.send('LA Chargers'));
examples.get('/cookie_dough', (req, res) => res.send('rocky road'));
examples.get('/YOTE', (req, res) => res.send('YEEEET'));
examples.get('/Mock', (req, res) => res.send('Dolla Dolla Bills Y\'all'));
examples.get('/Orue', (req, res)=>res.send('Comic Books'));
examples.get('/mashjam', (req, res)=>res.send('White Buffalo'));
examples.get('/gomez', (req, res) => res.send('I am cool'));
examples.get('/white', (req, res) => res.send ('Bulldog Puppies'));
examples.get('/doodlebob', (req, res) => res.send('Hoy minoy miñoy'));
examples.get('/manbearpig', (req, res) => res.send('Al Gore'));
examples.get('/totallysecurechanneladminonly', (req, res) => res.send('Look at them.'));

module.exports = examples;




