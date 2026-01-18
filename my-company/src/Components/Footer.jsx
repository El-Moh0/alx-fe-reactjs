function Footer() {
  return (
    <footer style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', textAlign: 'center', marginTop: '20px' }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
