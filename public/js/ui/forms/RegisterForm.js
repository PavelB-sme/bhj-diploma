/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
      if (response && response.success) {
        this.element.reset(); // Очистка формы

        App.setState('user-logged'); // Обновление состояния

        // Закрытие модального окна с проверкой
        const modal = App.getModal('register');
        if (modal) modal.close();
      }
      // Нет обработки ошибок
    });
  }
}