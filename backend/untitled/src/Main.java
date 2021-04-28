import java.util.Arrays;

public class Main {
    public static void main(String[] args) {//3 6 7 46
        Arrays.stream(ValueSource.getTeacherList())
                .filter(s -> !s.contains("department_id\":173"))
                .filter(s -> !s.contains("department_id\":31"))
                .filter(s -> !s.contains("department_id\":11"))
                .filter(s -> !s.contains("department_id\":129"))
                .filter(s -> !s.contains("department_id\":13"))
                .filter(s -> !s.contains("department_id\":357"))
                .filter(s -> !s.contains("department_id\":73"))
                .filter(s -> !s.contains("department_id\":259"))
                .filter(s -> !s.contains("department_id\":160"))
                .filter(s -> !s.contains("department_id\":36"))








                .filter(s -> !s.contains("department_id\":86"))
                .filter(s -> !s.contains("department_id\":354"))
                .filter(s -> !s.contains("department_id\":353"))
                .filter(s -> !s.contains("department_id\":355"))
                .filter(s -> !s.contains("department_id\":176"))
                .filter(s -> !s.contains("department_id\":27"))
                .filter(s -> !s.contains("department_id\":8,"))
                .filter(s -> !s.contains("department_id\":5,"))
                .filter(s -> !s.contains("department_id\":2,"))
                .filter(s -> !s.contains("department_id\":1,"))
                .filter(s -> !s.contains("department_id\":4,"))





                .filter(s -> !s.contains("department_id\":3
                .filter(s -> !s.contains("department_id\":6
                .filter(s -> !s.contains("department_id\":7
                .filter(s -> !s.contains("department_id\":46
                .filter(s -> !s.contains("department_id\":29
                .filter(s -> !s.contains("department_id\":56
                .filter(s -> !s.contains("department_id\":36
                .filter(s -> !s.contains("department_id\":39
                .filter(s -> !s.contains("department_id\":45


                .forEach(System.out::println);
    }
}
