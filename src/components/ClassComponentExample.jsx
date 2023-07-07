import React, { Component } from "react";

// Class componentlar hali hazırda react tarafından yazılmış component classından extend edilirler.
// nesne tabanlı programlama bilenler için miras alırlar da diyebiliriz.
class ClassComponentExample extends Component {
  // Constructor metot bu class/component çağırıldığında çalışan yapıcı metottur.
  // state vb. değerler burada tanımlanır.
  // propslar immutable(değiştirilemez) yapıdadır, stateler ise belli koşullara göre değişebilen yapıdır.
  constructor() {
    // super ise extend edilen Component classındaki constructor metotundaki bütün özellikleri almamıza yaramaktadır.
    super();
    this.state = {
      title: "Baz Yazılım",
    };
    // Biz normalde class component içerisinde belli koşula göre veya herhangi bir şekilde state değiştirecek bir fonksiyon
    // yazdığımız zaman ilgili class component'in hiçbir özelliğine erişemiyoruz. (this class component'in özelliklerini bize getirir.)
    // bu class component'in özelliklerine erişebilmek için constructor metot içerisinde ilgili kendi oluşturduğumuz state değiştirecek
    // metotu bu class'a bağlamamız yani bind etmemiz gerekiyor. Bağladıktan sonra state değiştiren metot içerisinde this keywordünü
    // kullandığımız zaman bu class component'in özelliklerine kolayca erişebileceğiz.
    // bu işlemi constructor metot içerisinde yapmamızın sebebi ilgili component çağırıldığında yapılması gereken bir işlem olduğu içindir.

    // İşte Javascriptte bind ve this bu işe yaramaktadır.
    this.setTitle = this.setTitle.bind(this);

    // bind işlemi uzun ve zahmetli bir işlem olduğu için (her state değiştirme metotu için bu işlemi yapmamız gerekecek.)
    // EcmaScript ile Javascript'e eklenen arrow functions'ları kullanabiliriz.
    // Arrow functionsları kullandığımız zaman ilgili metot bulunduğu class'a otomatik olarak bağlanacaktır. (bind olacaktır.)
    // Buda bizi metotları bind etme işleminden kurtaracaktır.
    // Temel mantığı arrow functionlarda kullanılan this keywordü otomatik olarak kendi scopeundan çıkıp bir üst scope'da bulunan
    // bilgilere erişebiliyor.

    // State değiştirmek için neden "setState" kullanmamız gerekmektedir?
    // state'i direkt obje olarak değiştirmek istedğimiz zaman react bize uyarı veriyor: state değiştirmek istiyorsak direk böyle
    // değiştirme useState() metotunu kullan işte bunun sebebi şudur;
    // React VirtualDOM ilgili component'in state'i değiştiğini direkt obje olarak değiştirirsek anlayamacaktır fakat
    // setState metotunu kullanırsak React VirtualDOM orada bir state değişme işlemi olduğunu anlayacak ve ilgili component'in
    // state'ini değiştirip render edebilecektir. setState metotu ilgili state işlemi değiştikten sonra state'i değişen component'in
    // render fonksiyonunu tekrardan çalıştırmaktadır.
  }

  setTitle() {
    this.setState({ title: "Sananelanbro" });
  }
  // Class componentlar render fonksiyonu ile içerisine girdiğimiz JSX kodlarını render ederler.
  render() {
    // Class componentlarda propları yakalamamıza gerek yoktur. Otomatik olarak proplara ulaşabiliriz.
    // this keyword'ü o anki instance'a sahip ilgili class component'e erişmemizi sağlar.
    let props = this.props;
    // render metotu aynı fonksiyon componentlerde olduğu gibi render edeceği jsx kodlarını dönmektedir.
    // ilerde göreceğimiz stateler konusunda, her state(durum) değiştiğinde bu render fonksiyonu tekrardan çalıştırılacaktır.
    // Önceden bir component değiştirilecek state barındıracaksa class component kullanılırmış, yok herhangi bir state güncelleme işlemi
    // olmayacaksa fonksiyonel component kullanılırmış. Ama React 16.5 ile gelen Hook yapıları artık fonksiyonel componentlarda da state
    // işlemi tanımlamamızı sağlamıştır.

    // React Class Componentler yerine Fonksiyonel Componentler kullanmamızı önermiştir. Çünkü Javascript'in saf halinde class yapısı
    // bulunmamaktadır, class componentlar webpack/babel sayesinde sonradan düzenlenmeye ihtiyaç duyarlar çünkü tarayıcı class yapısını anlamaz.
    // Bu işlemde ister istemez performans konusuna etki edecektir. Ama fonksiyonel componentlarda böyle bir durum söz konusu değildir.
    // Çünkü Javascript'in saf yapısında fonksiyon bulunmaktadır.
    return (
      <div className="main--class--component">
        <h1>{this.state.title}</h1>
        <button onClick={this.setTitle}>Başlığı Değiştir</button>
      </div>
    );
  }
}
export default ClassComponentExample;

// PropTypes : Proptypes ile proplar ile gelecek verilerin türünü belirleyebiliyoruz.
// Component'in Proptypes'ını belirlemek için : Component.propTypes = { name = PropTypes.String.isRequired }
// gibi işlem yaptığımız zaman ilgili component'a gelen name adlı prop'un türü her zaman string olacaktır diye belirtmiş oluyoruz.
// .isRequired eklediğimiz zaman ilgili propu kesinlikle girmek zorunda kalıyoruz.

// Varsayılan PropTypes belirleme
// Bu işlem için ilgili component'a gelip en sonuna : Component.defaultProps{ name="defaultName" }
// gibi işlem yaptığımız zaman biz component'ı çağırdığımız yerde prop geçmezsek/prop ilgili yerden gelemez sorun çıkarsa,
// varsayılan olarak prop değerleri atayabiliyoruz.

// props ile state arasındaki fark
// propslar ile başlayalım;
// -> propslar ilgili component'e sonradan herhangi bir şekilde değiştirilmeyecek başlangıç dataları göndermek için kullanılır.
// stateler ile devam edelim;
// -> stateler ilgili component'e sonradan herhangi bir event sonucu değişebilecek dataları göndermek için kullanılır.
// İlgili Component'in başlangıç dataları her zaman props ile gönderilmelidir, sonra props ile gelen datalar,
// state objesi içerisine aktarılıp sonradan değiştirilecek ise böyle değiştirilmelidir.
