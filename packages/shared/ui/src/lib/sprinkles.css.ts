import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { createTheme  } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
    colors: {
        primary: '#ff0000'
    }
});


const { colors } = vars;

const colorProperties = defineProperties({
    properties: {
        background: colors
    }
})

export const sprinkles = createSprinkles(colorProperties);
