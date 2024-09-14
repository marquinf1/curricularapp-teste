from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from django import forms


class EditProfileForm(UserChangeForm):
    password = forms.CharField(label="", widget=forms.TextInput(attrs={'type': 'hidden'}))

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password',)

    def __init__(self, *args, **kwargs):
        super(EditProfileForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields[
            'username'].help_text = '<span class="form-text text-muted"><small>Máximo de 150 caracteres. Letras, números e @/./+/-/_ apenas.</small></span>'
        self.fields['first_name'].widget.attrs['class'] = 'form-control'
        self.fields['last_name'].widget.attrs['class'] = 'form-control'
        self.fields['email'].widget.attrs['class'] = 'form-control'

class SignUpForm(UserCreationForm):
    email = forms.EmailField(label="E-mail",
                             widget=forms.TextInput(attrs={'class': 'form-control'}), )
    first_name = forms.CharField(label="Primeiro nome", max_length=100,
                                 widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name = forms.CharField(label="Último sobrenome", max_length=100,
                                widget=forms.TextInput(attrs={'class': 'form-control'}))
    codigoGestor = forms.CharField(label="Código gestor", max_length=100, required=False,
                                widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ('username', 'codigoGestor', 'first_name', 'last_name', 'email', 'password1', 'password2',)

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)

        self.fields['username'].widget.attrs['class'] = 'form-control'
        self.fields['username'].label = 'Usuário'
        self.fields[
            'username'].help_text = '<span class="form-text text-muted"><small>Máximo de 150 caracteres. Letras, números e @/./+/-/_ apenas.</small></span>'
        self.fields['codigoGestor'].label = 'Código gestor'
        self.fields[
            'codigoGestor'].help_text = '<span class="form-text text-muted"><small>Apenas informe esse código se o seu acesso será como Gestor.</small></span>'

        self.fields['password1'].widget.attrs['class'] = 'form-control'
        self.fields['password1'].widget.attrs['placeholder'] = 'Senha'
        self.fields['password1'].label = 'Senha'
        self.fields[
            'password1'].help_text = '<ul class="form-text text-muted small"><li>Sua senha não pode ser similar a qualquer informação pessoal.</li><li>Sua senha deve conter no mínimo 8 caracteres.</li><li>Sua senha não pode ser comumente usada.</li><li>Sua senha não pode ser apenas números.</li></ul>'

        self.fields['password2'].widget.attrs['class'] = 'form-control'
        self.fields['password2'].label = 'Confirme a senha'
        self.fields[
            'password2'].help_text = '<span class="form-text text-muted"><small>Digite a mesma senha anterior, para verificação.</small></span>'
