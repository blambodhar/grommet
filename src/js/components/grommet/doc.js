import { schema, PropTypes } from 'react-desc';

export default Grommet => schema(Grommet, {
  description: 'This is the primary Grommet container outer.',
  usage: `import { Grommet } from 'grommet';
  <Grommet centered={true}>...</Grommet>`,
  props: {
    centered: [
      PropTypes.bool,
      'Whether to centralize or not the content inside the container.',
      {
        defaultProp: true,
      },
    ],
    inline: [
      PropTypes.bool,
      'Whether to render the app relative to the container (inline) or to the browser window.',
    ],
    theme: [
      PropTypes.object,
      'Custom styles for Grommet app component.',
    ],
  },
});
