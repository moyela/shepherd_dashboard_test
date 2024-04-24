import svgHouse from '../../../lib/icons/house.svg';

export default function HouseSvg() {
    return (
      <svg dangerouslySetInnerHTML={{ __html: svgHouse }} />
    );
  };