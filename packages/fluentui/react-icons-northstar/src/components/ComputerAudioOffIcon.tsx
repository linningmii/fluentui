import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ComputerAudioOffIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M24,8.5a.482.482,0,0,1-.149.352l-1.468,1.476A1.379,1.379,0,0,1,23,11.5v7a1.382,1.382,0,0,1-.121.574,1.6,1.6,0,0,1-.8.8A1.385,1.385,0,0,1,21.5,20H18v1h1a.5.5,0,0,1,.023,1H13a.507.507,0,0,1-.5-.5.47.47,0,0,1,.438-.5c.021,0,.041,0,.062,0h1V20H12.7L8.851,23.852a.491.491,0,0,1-.7,0,.491.491,0,0,1-.009-.694l.009-.01,15-15a.491.491,0,0,1,.694-.009l.009.009A.482.482,0,0,1,24,8.5ZM18.89,11H10.5a.507.507,0,0,0-.5.5v7a.446.446,0,0,0,.086.3.488.488,0,0,0,.215.148A.888.888,0,0,0,10.59,19c.107,0,.207,0,.3,0l-.9.9a.908.908,0,0,1-.391-.2,1.591,1.591,0,0,1-.312-.348,1.872,1.872,0,0,1-.211-.425A1.313,1.313,0,0,1,9,18.5v-7a1.382,1.382,0,0,1,.121-.574,1.6,1.6,0,0,1,.8-.8A1.382,1.382,0,0,1,10.5,10h9.39ZM16,13.891l-1,1V13.437L14.148,14H13v2h.89l-1,1H12V13h1.851L16,11.562Zm3.617-.8A4.926,4.926,0,0,1,20,15a5.055,5.055,0,0,1-.188,1.367,4.615,4.615,0,0,1-.562,1.258l-.821-.578a4.263,4.263,0,0,0,.422-.988A3.837,3.837,0,0,0,19,15c0-.083,0-.174-.008-.273s-.014-.2-.027-.3a2.855,2.855,0,0,0-.055-.293,1.989,1.989,0,0,0-.082-.262l-.859.867a1.164,1.164,0,0,1,.023.129A1.117,1.117,0,0,1,18,15a3.048,3.048,0,0,1-.1.766,2.793,2.793,0,0,1-.293.711l-.812-.571-.8.8v1.734l-1.039-.7L13.7,19h7.8a.507.507,0,0,0,.5-.5v-7a.439.439,0,0,0-.094-.281.69.69,0,0,0-.234-.188ZM15,20v1h2V20Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M20,15a4.97,4.97,0,0,0-.383-1.906l-.789.781A3.39,3.39,0,0,1,19,15a4.126,4.126,0,0,1-.57,2.047l.82.578A4.953,4.953,0,0,0,20,15Zm-2.391,1.477A2.983,2.983,0,0,0,18,15a.99.99,0,0,0-.031-.258L16.8,15.906ZM17,20H15v1h2Zm-2.039-2.258,1.039.7V16.7ZM24,8.5a.5.5,0,0,1-.148.352l-1.469,1.476c.055.047.117.07.172.117A1.493,1.493,0,0,1,23,11.5v7A1.531,1.531,0,0,1,21.5,20H18v1h1a.5.5,0,0,1,0,1H13a.5.5,0,0,1-.5-.5A.467.467,0,0,1,13,21h1V20H12.7L8.852,23.852a.5.5,0,1,1-.7-.7l15-15A.5.5,0,0,1,24,8.5Zm-9,6.391V13.438L14.148,14H13v2h.891ZM12.891,17H12V13h1.852L16,11.562v2.329L19.891,10H10.5A1.531,1.531,0,0,0,9,11.5v7a1.546,1.546,0,0,0,.992,1.4Z"
      />
    </svg>
  ),
  displayName: 'ComputerAudioOffIcon',
});