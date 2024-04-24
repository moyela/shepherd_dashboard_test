import svgCircle from '../../../lib/icons/circle.svg';

export default function CircleSvg() {
    return (
      <svg dangerouslySetInnerHTML={{ __html: svgCircle }} />
    );
  };