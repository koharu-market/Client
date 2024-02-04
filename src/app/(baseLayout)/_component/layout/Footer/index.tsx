import MobileFooterMenubar from './MobileFooterMenubar';

export default function Footer() {
  return (
    <div>
      <MobileFooterMenubar />
      <div className="md:mb-0 mb-14">
        <footer>Footer</footer>
      </div>
    </div>
  );
}
