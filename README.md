The changelog below represents changes that result from a mock PR review. This specific app needed a major refactor. A large refactor like this is great material for a leveling up discussion. It's also great material to bond with a teammate over a pair coding sessions.
 
At some point I lost track of what I was changing as I was having too much fun. You may see some discrepancies between the changelog and actual source.
 
## Change Log

### `<App />`
- Converted `<App />` into a functional component
- Changed `<App />` container from `div` to `main`
 
### `<Calculator />`
- Componentized `calculator.js` and moved into `../components/Calculator`
- Removed props var from constructor as no props are being passed into `<Calculator />`
- Created new styles for `<Calculator />` container as `.calculator-main` was being used twice
- Add a `.buttonsContainer` container around buttons
- Created a `calculatorButtons` array to hold button values
- Changed the calculation function
- Replaced state values `number_a` and `number_b` with `previousValue` and `currentValue`
- Removed `result` from state
- Fixed comparison operators. Changed `!=` and `==` to `!==` an `===`
- Fixed falsey comparison operators
- Moved all methods above the renderer
- Removed `autoCalculate`. "Future" code should live in a enhancement branch, not in a branch headed towards master
- Reworked the `calculate` function
- Removed `componentDidUpdate` as it's not needed
- Removed jQuery
- Added multiplication and division operations
- Moved header and output screen into child components
 
### `<Header />`
- Created a `.tradeMark` style and removed inline styling
- Changed trademark container to a `h2`
- Wrapped trademark symbol in `sup` tag
- Used HTML symbol for trademark symbol
 
### `<Screen />`
- Changed calculation output container from `span` to `output`
- Replaced `<hr />` with css border on `output` container
 
### `<Button />`
- Created a `<Button />` component
- Removed button `.selected` and used native button outline
- Replaced `click_*` with `buttonClickHandler` arrow function and moved above `render()`. One function to rule them all aka event delegation

### General changes
- Added Scribd favicon
- Converted to using css modules
- Added an `index.js` to `../components`
- Renamed vars/funcs so they are camelCase
- Removed `console.log`
- Used CSS grids
- Added type checking with PropTypes
- Added component snapshots

## Bugs and followup review items
- [ ] Fix the calculator screen so it auto scrolls to the right as you type
- [ ] Cleanup how `previousValue`, `currentValue` and `screenValue` types are defined
- [x] Add some snapshot test for components
- [ ] Add functional test for `Calculator.js` component
- [ ] Rename `doMath()` function to something more professional (suggestion only)
- [ ] Maybe refactor `buttonPressed` switch into a helper
- [ ] Eject `create-react-app` before releasing to production
- [ ] Fix results from `npm audit`. Mostly `braces` and `webpack` related security issues
- [ ] Refactor `<Calculator />` class into a functional component with hooks. (suggestion only)
