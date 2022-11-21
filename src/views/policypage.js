import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './policypage.css'

const Policypage = (props) => {
  return (
    <div className="policypage-container">
      <Helmet>
        <title>Policypage - LapShop</title>
        <meta property="og:title" content="Policypage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="policypage-container1">
        <span className="policypage-text">
          <span>Hướng dẫn mua hàng từ xa</span>
          <br></br>
          <br></br>
          <span> HƯỚNG DẪN MUA HÀNG TỪ XA TẠI LAPTOP88</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            {' '}
            Để phục vụ quý khách hàng tốt hơn, Laptop88 áp dụng mô hình bán hàng
            từ xa - thanh toán tiền khi nhận hàng, dành cho các khách hàng ở
            ngoài khu vực Hà Nội và thành phố Hồ Chí Minh có nhu cầu mua sản
            phẩm tại Laptop88.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span> Cụ thể quy trình mua hàng như sau:</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Bước 1: Quý khách chọn sản phẩm muốn mua trên website Laptop88
            (https://laptop88.vn/)
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Bước 2: Quý khách liên hệ với chuyên viên hỗ trợ qua cửa sổ chat
            tích hợp trên website hoặc liên hệ số Hotline 02471069999, chọn phím
            số 2 để gặp chuyên viên bán hàng trực tuyến.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Bước 3: Chuyên viên bán hàng của Laptop88 sẽ tư vấn và gửi mô tả chi
            tiết về sản phẩm qua email cho Quý khách.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>Bước 4: Quý khách xác nhận đồng ý mua sản phẩm.</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Bước 5: Đối với tùy loại tình trạng sản phẩm, Quý khách sẽ thanh
            toán một phần hoặc toàn bộ giá trị của sản phẩm nhằm tránh trường
            hợp đặt đơn hàng ảo với tên và địa chỉ sai lệch gây thiệt hại cho
            Laptop88.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>Cụ thể các loại sản phẩm như sau:</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm là laptop đã qua sử dụng, Quý khách chuyển tối thiểu
            300.000 VNĐ vào tài khoản của Laptop88 để đặt cọc.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm là linh, phụ kiện máy tính/laptop, Quý khách vui lòng
            chuyển toàn bộ giá trị sản phẩm vào tài khoản của Laptop88.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm là laptop mới không có ưu đãi nâng cấp kèm theo, Quý
            khách vui lòng chuyển khoản 5% giá trị sản phẩm được niêm yết trên
            website Laptop88.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm laptop mới có ưu đãi nâng cấp ram, ổ cứng, Quý khách
            chuyển khoản 10% giá trị sản phẩm được niêm yết trên website
            Laptop88. Trong trường hợp sản phẩm có quà tặng là ram và ổ cứng,
            nhưng Quý khách không muốn nhận thì Laptop88 sẽ tiến hành nhập lại
            các quà tặng đó với giá trị tương đương 80% giá bán được niêm yết
            trên website Laptop88 và được trừ thẳng vào giá của sản phẩm.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Bước 6: Sau từ 1 tới 5 ngày, nhân viên dịch vụ chuyển phát nhanh sẽ
            giao hàng tại địa chỉ mà Quý khách đã đăng ký. Laptop88 đề nghị Quý
            khách quay video đồng kiểm khi nhận hàng có kèm hình ảnh của nhân
            viên giao nhận, sau đó thực hiện kiểm tra máy và thanh toán số tiền
            còn thiếu nếu máy đúng như mô tả (Căn cứ vào hình thức mô tả và ảnh
            chụp được gửi cho Quý khách trước đó).
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>*Quý khách lưu ý:</span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Thời gian vận chuyển/nhận hàng trên không tính thứ 7 và chủ nhật.
            Thời gian vận chuyển có thể kéo dài do ảnh hưởng tình hình dịch bệnh
            tại các địa phương trung chuyển hàng hoá hoặc số lượng giao vận của
            các đơn vị vận chuyển giảm do bị nhiễm Covid-19.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Trường hợp sản phẩm nhận được đúng như mô tả, nhưng Quý khách đổi
            ý không muốn nhận nữa thì số tiền đặt cọc/thanh toán ban đầu sẽ
            không được hoàn lại.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Trường hợp sản phẩm không đúng như mô tả hoặc có lỗi khi kiểm tra,
            Laptop88 sẽ hoàn trả tiền đặt cọc cho Quý khách, đồng thời tặng Quý
            khách sản phẩm balo laptop theo máy.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm laptop còn bảo hành của Laptop88: Trong thời gian 1
            tháng đầu tiên kể từ ngày nhận máy, Quý khách được hỗ trợ chi phí 2
            chiều nếu sản phẩm gặp lỗi kỹ thuật mà không khắc phục được từ xa
            (Áp dụng với Khách hàng ở ngoài khu vực Hà Nội và thành phố Hồ Chí
            Minh); Ngoài thời gian 1 tháng kể trên, áp dụng bảo hành sản phẩm
            theo quy định chung của Laptop88.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            - Với sản phẩm laptop mới sau khi nhận hàng, Quý khách có thể nâng
            cấp sản phẩm tại TTBH của hãng hoặc các địa điểm do hãng ủy quyền
            tại địa phương. Laptop88 sẽ không chịu trách nhiệm nếu Quý khách tự
            ý nâng cấp sản phẩm vì bất kỳ lý do gì. Sau khi nâng cấp sản phẩm,
            Quý khách sẽ chỉ được hưởng các điều kiện bảo hành do hãng quy định.
            Trong thời gian bảo hành của hãng, nếu sản phẩm gặp lỗi Quý khách
            vui lòng liên hệ Hotline 02471069999 của Laptop88 hoặc liên hệ trực
            tiếp tới các TTBH được hãng ủy quyền trên toàn quốc để được hỗ trợ
            bảo hành.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            {' '}
            Quý khách tham khảo danh sách các địa điểm nhận bảo hành của hãng
            dưới đây.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Policypage
