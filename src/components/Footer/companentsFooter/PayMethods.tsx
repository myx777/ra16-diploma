/**
 * Renders a section displaying payment methods accepted for payment.
 *
 * @return {JSX.Element} The rendered section component.
 */

const PayMethods = () => {
  return (
    <section>
      <h5>Принимаем к оплате:</h5>
      <div className="footer-pay">
        <div className="footer-pay-systems footer-pay-systems-paypal"></div>
        <div className="footer-pay-systems footer-pay-systems-master-card"></div>
        <div className="footer-pay-systems footer-pay-systems-visa"></div>
        <div className="footer-pay-systems footer-pay-systems-yandex"></div>
        <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
        <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
      </div>
    </section>
  );
};

export default PayMethods;