/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function PostContent() {
  return (
    <section className="prose text-justify !max-w-full">
      <img src="/uploads/img-5.jpg" alt="Quy trình 5S" className="rounded-lg" />
      <p className="text-center text-sm">Quỳ trình 5s là gì</p>
      <p className="text-gray-700 mt-4">
        Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng
        5S cần yếu tố gì?
      </p>
      <h2 className="text-xl font-bold text-green-600 mt-6">
        1. Quy trình 5S là gì?
      </h2>
      <p className="text-gray-700 mt-2">
        Quy trình 5S được biết đến như một phương pháp quản lý hiệu quả đến từ
        Nhật Bản...
      </p>
      <blockquote>
        Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng
        5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông
        tin chi tiết về mô hình này cũng như yếu tố tạo nền tảng thành công của
        quy trình bạn nhé.
      </blockquote>
      <h2>1. Quy trình 5S là gì?</h2>
      <p>
        Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất.
        Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
      </p>
      <p>
        Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng
        bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu
        trong tiếng Nhật:
      </p>
      <ul>
        <li>
          <strong>Seiri</strong> (Ngăn nắp)
        </li>
        <li>
          <strong>Seiso</strong> (Sạch sẽ)
        </li>
        <li>
          <strong>Seiton</strong> (Trật tự)
        </li>
        <li>
          <strong>Shitsuke</strong> (Kỷ luật)
        </li>
        <li>
          <strong>Seiketsu</strong> (Tiêu chuẩn hóa)
        </li>
      </ul>
      <h2>2. Lợi ích quy trình 5S đem lại</h2>
      <p>
        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước
        của quy trình với mục đích cải tiến môi trường làm việc của doanh
        nghiệp.
      </p>
      <p>
        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
        tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc
        sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy
        định và dễ dàng tìm kiếm khi cần thiết.
      </p>
      <p>
        Và khi doanh nghiệp áp dụng quy trình này thành công thì doanh nghiệp có
        một môi trường làm việc tốt hơn cho mỗi nhân viên. Và từ đó, cũng góp
        phần tạo nên một nền văn hóa doanh nghiệp mạnh mẽ.
      </p>
      {/* Các nội dung khác */}
      <img src={"/uploads/blog1.jpg"} alt=""></img>
      <p className="text-center">Tại sao doanh nghiệp cần quy trình 5S?</p>
      <div className="">
        {/* Tiêu đề chính */}
        <h3 className="text-xl font-bold text-green-700">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </h3>
        <p className="mt-2 text-gray-700">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        {/* Danh sách lợi ích */}
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-green-600">
              3.1 Cải thiện rõ nét môi trường làm việc
            </h4>
            <p className="text-gray-700">
              Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
              gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
              việc hiệu quả cho cá nhân trong doanh nghiệp.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              3.2 Tiết kiệm thời gian đáng kể
            </h4>
            <p className="text-gray-700">
              Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
              thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
              dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
              đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              3.3 Tăng năng suất làm việc
            </h4>
            <p className="text-gray-700">
              Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
              tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
              và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời
              gian và tăng năng suất làm việc.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              3.4 Tiết kiệm chi phí
            </h4>
            <p className="text-gray-700">
              Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
              sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
              chi phí vận hành đáng kể cho doanh nghiệp của mình.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              3.5 Tăng chất lượng sản phẩm
            </h4>
            <p className="text-gray-700">
              5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
              đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất
              không mong muốn.
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <img src={"/uploads/img3.jpg"} alt=""></img>
      <div className="">
        {/* Tiêu đề chính */}
        <h3 className="text-xl font-bold text-green-700">
          4. Quy trình 5S gồm các bước
        </h3>
        <p className="mt-2 text-gray-700">
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </p>

        {/* Danh sách các bước 5S */}
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-green-600">
              4.1 Seiri (Ngăn nắp)
            </h4>
            <p className="text-gray-700">
              Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
              nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo
              ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời
              gian.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              4.2 Seiton (Sắp xếp)
            </h4>
            <p className="text-gray-700">
              Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị,
              tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và
              sử dụng chúng một cách dễ dàng.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              4.3 Seiso (Vệ sinh)
            </h4>
            <p className="text-gray-700">
              Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
              trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ.
              Việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm
              bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              4.4 Seiketsu (Tiêu chuẩn hóa)
            </h4>
            <p className="text-gray-700">
              Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này
              giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử
              dụng các dụng cụ, thiết bị, tài liệu.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              4.5 Shitsuke (Kỷ luật)
            </h4>
            <p className="text-gray-700">
              Đây được xem là bước cuối cùng trong quy trình. Và đồng thời là
              trong thang duy trì tính hiệu quả của quy tắc 5S trong dài hạn.
              Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt
              chẽ để đảm bảo mọi người trong tổ chức đều tự giác và tuân thủ
              theo quy trình.
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <img src={"/uploads/img3.jpg"} alt=""></img>

      <div className="">
        {/* Tiêu đề chính */}
        <h3 className="text-xl font-bold text-green-700">
          5. Quy trình được thực hiện như sau:
        </h3>
        <p className="mt-2 text-gray-700">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </p>

        {/* Danh sách các bước */}
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-green-600">
              5.1 Giai đoạn chuẩn bị
            </h4>
            <p className="text-gray-700">
              Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
              điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân
              bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S hiệu quả
              hơn.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              5.2 Triển khai rộng rãi
            </h4>
            <p className="text-gray-700">
              Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
              trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức
              cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
            </h4>
            <p className="text-gray-700">
              Đây là bước có thể khiến mọi người không hào hứng trong các bước
              của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không
              khí hào hứng cho các cá nhân.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              5.4 Sàng lọc, sắp xếp và đánh giá
            </h4>
            <p className="text-gray-700">
              Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
              doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
              thực hiện sàng lọc và sắp xếp trở nên khoa học, hiệu quả hơn và dễ
              dàng tìm kiếm sau này.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600">
              5.5 Đánh giá
            </h4>
            <p className="text-gray-700">
              Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
              trình cải tiến và xem xét cần cải tiến phương diện nào hay không
              trong quá trình thực hiện quy trình 5S.
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <img src={"/uploads/img2.jpg"} alt=""></img>

      <div className="">
        {/* Phần 6: 5S và Kaizen */}
        <h3 className="text-xl font-bold text-green-700">
          6. Quy trình 5S có giống với Kaizen?
        </h3>
        <p className="mt-2 text-gray-700">
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là hai khái niệm khác nhau nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </p>

        <div className="mt-4 p-4 bg-gray-100 border-l-4 border-green-600">
          <p className="text-gray-700 italic">
            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
            doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
            tính liên tục và bền vững.
          </p>
        </div>

        <div className="mt-4 p-4 bg-gray-100 border-l-4 border-green-600">
          <p className="text-gray-700 italic">
            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
            trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
            tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
          </p>
        </div>

        <p className="mt-4 text-gray-700">
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo.
        </p>

        {/* Phần 7: Đối tượng áp dụng 5S */}
        <h3 className="mt-6 text-xl font-bold text-green-700">
          7. Đối tượng nào nên áp dụng 5S?
        </h3>
        <p className="mt-2 text-gray-700">
          Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
          nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên,
          5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
          chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
        </p>

        <p className="mt-2 text-gray-700">
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </p>
      </div>
      {/* image */}
      <img src={"/uploads/img1.jpg"} alt=""></img>

      <div className="">
        {/* Tiêu đề chính */}
        <h3 className="text-xl font-bold text-green-700">
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </h3>

        <p className="mt-2 text-gray-700">
          Và những nhân tố quyết định đến quá trình thành công của quy trình
          nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
        </p>

        {/* Danh sách các yếu tố */}
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Lãnh đạo cởi mở và ủng hộ</strong> áp dụng quy trình vào
            doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
            nghiệp có áp dụng quy tắc này hay không.
          </li>
          <li>
            <strong>Chương trình, kế hoạch thực hiện quy trình:</strong> Sau khi
            phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế
            hoạch thực hiện triển khai 5S.
          </li>
          <li>
            <strong>Sự tự nguyện tham gia của toàn thể nhân viên:</strong> Doanh
            nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì
            lợi ích chung của tổ chức, của doanh nghiệp.
          </li>
        </ul>

        {/* Đoạn kết luận */}
        <p className="mt-4 text-gray-700">
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </p>
      </div>
    </section>
  );
}
