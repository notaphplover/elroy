<template>
  <form>
    <input
      tabIndex="0"
      name="email"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      tabIndex="0"
      name="username"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <button v-on:click="register">Register</button>
  </form>
</template>

<script lang="ts">
import { CONFIG_ADAPTER_TYPES } from '@/layer-modules/config/adapter/types';
import { Container } from 'inversify';
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import { UserApiV1Consumer } from '../../api/consumer/UserApiV1Consumer';
import { USER_ADAPTER_TYPES } from '../../config/types';

@Component
export default class RegisterForm extends Vue {
  @Inject(CONFIG_ADAPTER_TYPES.CONTAINER)
  private readonly container!: Container;
  private userApiV1Consumer!: UserApiV1Consumer;

  @Prop() private email!: string;
  @Prop() private password!: string;
  @Prop() private username!: string;

  public created(): void {
    this.userApiV1Consumer = this.container.get(
      USER_ADAPTER_TYPES.api.USER_API_V1_CONSUMER,
    );
  }

  public async register(): Promise<void> {
    await this.userApiV1Consumer.post({
      email: this.email,
      username: this.username,
      password: this.password,
    });
  }
}
</script>
